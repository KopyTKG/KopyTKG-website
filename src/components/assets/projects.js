const ProjectList = ({projects}) => {
    return(
        <>
            <div className="project-grid">
            {
                projects.map((data, index) => {
                    return(<>
                        <a className="card-body" target="_blank" href={data.url} rel="noreferrer">
                            <div className="card-head" style={{animationDelay: index*2+"s"}}>
                                {data.type === "iframe"? <>
                                    <iframe src={data.src} className="card-icon" style={{zIndex: -1}} scrolling="no" loading="lazy" disabled title={data.title}/>    
                                    <div className="card-dummy" />
                                    </>
                                :<>     
                                    <img src={data.src} className="card-icon" alt={data.title}/>
                                    <div className="card-dummy" />
                                </>
                                }
                            </div>
                            <div className="card-title">
                                {(index+1)+")"}&nbsp;&nbsp;{data.title}
                            </div>
                            <div className="card-desc">
                                {data.desc}
                            </div>
                            <div className="card-update">
                                Last update: <span className="card-date">{data.update}</span>
                            </div>
                        </a>
                    </>);
                })
            }
            </div>
        </>
    );
}

export default ProjectList;