const list = [ 
{id:1,title:"JavaScript"},
{id:2,title:"pyton"},
{id:3,title:"java"},
{id:4,title:"reactJs"},
{id:5,title:"nodeJs"} 
]

const getList = () => {
    return {type:'LIST',payload:list}
}
export default getList