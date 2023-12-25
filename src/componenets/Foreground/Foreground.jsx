import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

    const ref = useRef(null)
    
    const datas = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipsiscing.", 
            fileSize: ".5mb", 
            close: true, 
            tag: {isOpen : true, tagTitle: "Download Now", tagColor: "blue"}
        }, 
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipsiscing.", 
            fileSize: "2mb", 
            close: false, 
            tag: {isOpen : true, tagTitle: "Download Now", tagColor: "green"}
        }, 
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipsiscing.", 
            fileSize: ".5mb", 
            close: true, 
            tag: {isOpen : true, tagTitle: "Download Now", tagColor: "blue"}
        }, 
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipsiscing.", 
            fileSize: ".5mb", 
            close: true, 
            tag: {isOpen : true, tagTitle: "Download Now", tagColor: "blue"}
        }, 
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipsiscing.", 
            fileSize: ".5mb", 
            close: true, 
            tag: {isOpen : true, tagTitle: "Download Now", tagColor: "blue"}
        } , 
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipsiscing.", 
            fileSize: ".5mb", 
            close: true, 
            tag: {isOpen : true, tagTitle: "Download Now", tagColor: "blue"}
        }
    ]
    return (
        <div ref={ref} className='fixed w-full h-full z-10 flex flex-wrap gap-4 '>
            {datas.map((d, i , )=> <Card key={i} data={d} reference={ref}></Card>)}
    </div>
    );
};

export default Foreground;