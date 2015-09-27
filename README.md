# Практический вебинар по BEMHTML

Что в получится в итоге:

![](https://yadi.sk/i/A_erjdlhjMXnv_XXL.jpg)

## Сборка

Сборка самописная, очень простая, исходя из двух предпосылок:

- есть один уровень переопределения — `blocks`
- есть один бандл — `pages/index`

Код сборщика в файлике `bem.js`

## Декларативный шаблонизатор: основы

Почитать — https://ru.bem.info/technology/bemhtml/v2/rationale/

**Отличия декларативного от императивного шаблонизатора**

### Входные данные

```
{
  items: [
    { text: '1' },
    { text: '2' }
  ]
}
```

### Шаблоны

Императивный

```html
<ul class="menu">
    [% foreach item in items %]
        <li class="menu__item">
            [% item.text %]
        </li>
    [% end %]
</ul>
```

Декларативный

```js
block('menu')(
    tag()('ul'),
    elemMatch('item').tag()('li')
)
```

## Минимум, что необходимо понять

**Моды**

![](https://raw.github.com/bem/bem-core/v1/common.docs/reference/reference_mode_default.png)

https://ru.bem.info/technology/bemhtml/v2/reference/#Стандартные-моды

```js
block('b1').attrs(function() {
    return {src: this.ctx.url};
})
```

**Предикаты**

```js
block('b1').match(function() { return !!this.ctx.url; }).tag()('a');
```

```js
block('b1').mod('size', 'big')(...)
```

```js
block('b1').elem('text')(...)
```

**Контекст**

https://ru.bem.info/technology/bemhtml/v2/reference/#Контекст

**Примеры и рецепты**

https://ru.bem.info/technology/bemhtml/v2/reference/#Примеры-и-рецепты
