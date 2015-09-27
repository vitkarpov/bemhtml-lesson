block('menu')(
    content()(function() {
        return this.ctx.items.map(function(item) {
            return {block: 'link', url: item.url, content: item.title};
        });
    })
)
