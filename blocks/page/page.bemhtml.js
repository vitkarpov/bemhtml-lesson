block('page')(
    def()(function() {
        return applyCtx([
            '<!DOCTYPE html>',
            {
                tag: 'html',
                content: [
                    {
                        elem: 'head',
                        content: [
                            { tag: 'meta', attrs: { charset: 'utf-8' } },
                            { tag: 'title', content: this.ctx.title },
                            { elem: 'styles', css: this.ctx.styles }
                        ]
                    },
                    {
                        elem: 'inner',
                        content: applyNext()
                    }
                ]
            },
        ])
    }),

    tag()('body'),

    elem('head')(
        bem()(false),
        tag()('head')
    ),

    elem('meta')(
        bem()(false),
        tag()('meta')
    ),

    elem('styles')(
        def()(function(){
            return applyCtx(this.ctx.css.map(function(item) {
                return {tag: 'link', attrs: { rel: 'stylesheet', href: item }};
            }));
        })
    )
);
