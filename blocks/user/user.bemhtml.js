block('user')(
    content()(function() {
        var oldContent = applyNext();
        var firstLetter = oldContent.slice(0, 1);
        var rest = oldContent.slice(1 - oldContent.length);

        return [
            {
                elem: 'letter',
                content: firstLetter
            },
            rest
        ];
    })
);

block('user').elem('letter')(
    tag()('span')
);

block('user').match(function() { return !!this.ctx.image })(
    content()(function() {
        return [
            {
                elem: 'avatar',
                image: this.ctx.image
            },
            applyNext()
        ]
    })
);

block('user').elem('avatar')(
    content()(function() {
        return [
            {
                tag: 'img',
                attrs: { src: this.ctx.image, width: 42, height: 42 }
            }
        ];
    })
)
