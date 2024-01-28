import Header from "../components/Header";


export default function home() {
    return (
        <div className="Home-Page">
            <img className="Full-Page-Image" src="AIWebsiteBackground.png"/>
            <img className="Home-Page-Line" src="HomePageLine.png"/>
            <p className="Home-Title">LearnAIble</p>

            <p className="Home-Text">&lt;&lt;Are You Ready to Begin?&gt;&gt;</p>
            <div className="Start-Button-Container"><a href="page_one"><button className="Start-Button">Start</button></a></div>
        </div>
    )
}