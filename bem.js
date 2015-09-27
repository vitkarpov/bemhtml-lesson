var fs = require('fs');
var path = require('path');
var bem = require('bem-xjst');

/**
 * Сборщик БЭМ-проекта.
 * Есть реализации следующих технологий блока:
 * - bemhtml
 * - css
 *
 * @constructor
 */
var Assembler = function() {
    this._blocksFolder = path.join(__dirname, 'blocks');
};

/**
 * Запускает сборку
 */
Assembler.prototype.run = function() {
    var html = this._compileTemplates();
    var css = this._compileCSS();

    fs.writeFileSync('./pages/index/index.html', html);
    fs.writeFileSync('./pages/index/index.css', css);
};

/**
 * Возвращает скомпилированный html
 * @return {String} html
 */
Assembler.prototype._compileTemplates = function() {
    var template = bem.compile(this._getContent('bemhtml'));
    var bemjson = require('./pages/index/index.bemjson.js');

    return template.apply(bemjson);
};

/**
 * Возвращает скомпилированный CSS:
 * пока нет препроцессора — это просто цсс всех файликов, собранный в один
 * @return {String} css
 */
Assembler.prototype._compileCSS = function() {
    return this._getContent('css');
};

/**
 * Возвращает контент файлов указанной технологии блоков
 * @param  {String} tech {css|bemhtml}
 * @return {String}
 */
Assembler.prototype._getContent = function(tech) {
    return (this._getFiles(tech)
        .map(function(file) {
            return fs.readFileSync(file, 'UTF-8');
        })
        .reduce(function(a, b) {
            return a + b;
        })
    );
};

/**
 * Возвращает пути файлов указанной технологии блоков
 * @param  {String} tech {css|bemhtml}
 * @return {String}
 */
Assembler.prototype._getFiles = function(tech) {
    var blocksFolder = this._blocksFolder;

    return (fs.readdirSync(blocksFolder)
        .map(function(name) {
            var folder = path.join(blocksFolder, name);

            return (fs.readdirSync(folder)
                .filter(function(file) {
                    return file.indexOf(tech) > -1;
                })
                .map(function(file) {
                    return path.join(folder, file);
                })
            );
        })
        .reduce(function(a, b) {
            return a.concat(b);
        })
    );
};

// запускаем сборщик
(new Assembler()).run();
