export interface DiscussionItem {

    title: string;
    Section: number;
    description:string
    likes: string;
    views: string;
    comments: string;
    ShareColumn: string;
    time:string

}
export const discussionData:DiscussionItem[]=[
    {

        title:'lorem Ipsum',
        Section:2,
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. quibusdam assumenda iure eaque, in veritatis consequatur eius laudantium?',
        likes:"2k",
        views:"2k",
        comments:"2k",
        ShareColumn:"Share",
        time:"2 min ago",
    },
    {
        title:'lorem Ipsum',
        Section:2,
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. quibusdam assumenda iure eaque, in veritatis consequatur eius laudantium?',
        likes:"2k",
        views:"2k",
        comments:"2k",
        ShareColumn:"Share",
        time:"2 min ago",
    },
    {
        title:'lorem Ipsum',
        Section:2,
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. quibusdam assumenda iure eaque, in veritatis consequatur eius laudantium?',
        likes:"2k",
        views:"2k",
        comments:"2k",
        ShareColumn:"Share",
        time:"2 min ago",
    },
    {
        title:'lorem Ipsum',
        Section:2,
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. quibusdam assumenda iure eaque, in veritatis consequatur eius laudantium?',
        likes:"2k",
        views:"2k",
        comments:"2k",
        ShareColumn:"Share",
        time:"2 min ago",

    }
]

export interface MarketItem{
    image:string,
    title:string,
    desc:string,
  
}
export const marketSection:MarketItem[] = [
    {
        image:'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:"The Coldest Sunset",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut modi, laboriosam error commodi odio accusamus. ",
    },
    {
        image:'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:"The Coldest Sunset",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut modi, laboriosam error commodi odio accusamus. ",
        
    },
    {
        image:'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:"The Coldest Sunset",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut modi, laboriosam error commodi odio accusamus.",
        
    }
]