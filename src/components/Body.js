import React, {useState} from "react";
import { listData } from "../utils/useList";
import List from "./List";

const Body = () => {
    //const [list, setList] = useState(listData);
    const [filterList, setFilterList] = useState(listData);

    const handleSearch = (e) => {
        const updatedList = listData.filter((item)=>{
            return item?.color.toLowerCase().includes(e.toLowerCase());
        })
        setFilterList(updatedList);
    }
    return(
        <>
            <div className="list">
                <input type="text" onChange={(e)=>handleSearch(e.target.value)} />
                <List colorList={filterList} />
            </div>
        </>
    )
}

export default Body;