interface indexof {
    tabindex: number
}

const TabHeadingContent=({tabindex}:indexof)=>{
    return (
    <>
        <div className="stat-card-section">
            <div className="stat-card-box">
                <div className="stat-card-box-content">
            <img src="/StatCard/smiley.png" alt="smiley-icon" className="smiley-img"/>
            <span className="stat-card-section-label">Label-{tabindex+1}</span>
            <span className="stat-card-section-revel">REVEL</span>
            </div>
        </div>
        </div>
    </>
    )
};
export default TabHeadingContent;