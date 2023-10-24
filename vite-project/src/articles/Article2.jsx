import React from 'react'
import ArticleTemplate from './ArticleTemplate'

function Article2() {
    const articleContent = `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Aliquet porttitor lacus luctus accumsan. Consequat ac felis donec et. Tincidunt id aliquet risus feugiat in ante metus. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Felis eget nunc lobortis mattis. Neque gravida in fermentum et sollicitudin ac orci phasellus. Tristique senectus et netus et malesuada fames. Amet venenatis urna cursus eget nunc scelerisque viverra. Sit amet volutpat consequat mauris nunc congue. Vitae nunc sed velit dignissim sodales ut eu sem.</p>
        <p>Massa massa ultricies mi quis hendrerit dolor magna. Non arcu risus quis varius quam quisque id diam vel. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Aliquam etiam erat velit scelerisque. Auctor eu augue ut lectus. Suspendisse faucibus interdum posuere lorem ipsum dolor. Sed nisi lacus sed viverra tellus in hac. Interdum posuere lorem ipsum dolor. Massa ultricies mi quis hendrerit dolor. At volutpat diam ut venenatis tellus in. Egestas sed tempus urna et pharetra pharetra massa. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.</p>
        <p>Libero justo laoreet sit amet cursus sit. Et leo duis ut diam quam nulla porttitor massa id. Ac felis donec et odio pellentesque diam volutpat commodo sed. Nulla facilisi cras fermentum odio. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Egestas pretium aenean pharetra magna ac. Aliquam vestibulum morbi blandit cursus risus at. Duis ultricies lacus sed turpis. Velit scelerisque in dictum non consectetur a erat nam. Ut consequat semper viverra nam libero justo laoreet.</p>
        <p>Enim facilisis gravida neque convallis a cras. Ultrices in iaculis nunc sed augue. Nulla facilisi etiam dignissim diam. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Posuere morbi leo urna molestie at elementum eu. Viverra orci sagittis eu volutpat odio facilisis mauris. Ut eu sem integer vitae justo eget magna fermentum. Amet risus nullam eget felis eget. Diam vulputate ut pharetra sit. Integer vitae justo eget magna fermentum iaculis eu non. In hac habitasse platea dictumst vestibulum rhoncus. Dignissim diam quis enim lobortis scelerisque fermentum dui. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Gravida neque convallis a cras semper auctor. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Pulvinar proin gravida hendrerit lectus a. Diam maecenas ultricies mi eget mauris pharetra et.</p>
        <p>Vitae tortor condimentum lacinia quis vel eros donec ac odio. Fermentum et sollicitudin ac orci phasellus egestas. Nisl purus in mollis nunc sed id semper risus. Nam libero justo laoreet sit. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Adipiscing tristique risus nec feugiat in. Mi quis hendrerit dolor magna eget est lorem ipsum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ultrices in iaculis nunc sed augue lacus viverra vitae. Vulputate sapien nec sagittis aliquam. Consectetur adipiscing elit pellentesque habitant morbi tristique. Lacinia at quis risus sed vulputate odio ut enim blandit. Et netus et malesuada fames ac turpis egestas integer. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Diam sit amet nisl suscipit adipiscing bibendum est. Leo integer malesuada nunc vel risus commodo. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.</p>
    `

    return (
        <ArticleTemplate 
            title="The Best Wines of 2023"
            subtitle="Read about our editors' favorite wines from this year"
            author="Heel Asseale"
            date="October 23rd, 2023"
            imageLink="https://www.seriouseats.com/thmb/xnQObuVXoS4rVwmuQ0DlycZckB4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sea-primary-glassware-rkilgore-980-bddd4702ec1046cb80204d37a4003cc1.jpeg"
            content={articleContent}
        />
    )
}

export default Article2