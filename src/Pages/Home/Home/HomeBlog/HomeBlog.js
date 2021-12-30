import React from 'react';

const HomeBlog = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-info">Bike Blog</h1>
                <div className="row mt-4 mb-5">
                    <div className="col-lg-4">
                    
            <iframe width="300" height="150" src="https://www.youtube.com/embed/y2i3qna9d7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            
                    </div>

                    <div  className="col-lg-4">

                    <iframe width="300" height="150" src="https://www.youtube.com/embed/Ttr0PwQ7nCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    </div>

                    <div className="col-lg-4">

                
                    <iframe width="300" height="150" margin="10px" src="https://www.youtube.com/embed/HlGdj2O9pqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeBlog;