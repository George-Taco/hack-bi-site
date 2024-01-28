import Header from "../components/Header";

export default function page_two() {
    return (
        <div className="Wavy-Image">
            <img className="Full-Page-Image" src="wavypics.png"/>
            <div className="note">
                <div className="container">
                    <h2 className="How-To-Use">How to Use it?</h2>
                    <p className="noted">Your instruction in using AI will now begin. Below you will find<br />a common AI text generator. Enter the following commands <br />and observe the results:
                        <br />-
                        <br />-
                        <br />-
                        <br />-
                        <br />As you can see, AI is a very powerful tool. However, it can be used 
                        <br />for evil as well as good. 
                    </p>
                    <img className="cubes" src="cubes.png"></img>
                    <div className="Home-Button-Container"><a href="/minigame"><button className="Page-Button1">Next →</button></a></div>
                    <img className="astro" src="astro.png"></img>
                </div>
            </div>
        </div>
        
        
    )
}