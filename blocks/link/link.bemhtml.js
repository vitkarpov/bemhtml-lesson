block('link').match(function() { return this.ctx.url })(
    tag()('a'),
    attrs()(function() {
        return { href: this.ctx.url, title: this.ctx.url };
    })
);

block('link').mod('theme', 'white')(
    tag()('span'),
    content()(function() {
        return [
            {
                elem: 'inner',
                content: 'foo'
            },
            applyNext()
        ];
    })
);

block('link').elem('inner')(
    tag()('span')
);
