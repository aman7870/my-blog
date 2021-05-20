import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name,setName] = useState('mario');

    const handleDelete = (id) => {

        const del = blogs.filter((blog) => blog.id !== id);
        setBlogs(del);

    }
    useEffect(() => {
        fetch()
    },[]);

    return (
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
            <button onClick={() => setName('aman')}>Change name</button>
            <p>{ name }</p>
        </div>
    );
}

export default Home;