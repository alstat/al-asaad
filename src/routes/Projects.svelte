<script>
    import { projects } from "$lib/data/projects.js"
</script>

<div id="icon-sections">
    <div class="title-emphasis">Software Packages</div>
    <br>
    <div class="container">
        {#each projects as project, i}
            <div class="card">
                <div class="content">
                    <div class="img">
                        <a href="{ project["href"] }"><img src={ project["logo"] } alt="{ project["name"] }" /></a>
                    </div>
                    <div class="cardContent">
                        <h3><b>{ project["label"] }</b><br><br></h3>
                    </div>
                </div>
                <ul class="sci">
                    <li style="--i:1">
                        <div class="content-description">
                            {#if project["label"] === "Kitab.jl"}
                                Julia package for Islamicate texts from <a href='https://kitab-project.org/'>KiTaB</a> project<br>
                            {:else}
                                { project["desc"] }<br>
                            {/if}
                        </div>
                    </li>
                </ul>
            </div>
        {/each}
    </div> 
</div>
            
<style>
    div#icon-sections {
        display: block;
        margin-top: 100px;
        text-align: center;
        max-width: 1000px;
    }
    /*  */
    @keyframes colorful {
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
        appearance: none;
        border-style: none;
        color: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .container {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1em;
    }
    .container .card {
        position: relative;
        width: 250px;
        height: 350px;
        margin: 0.3em;
        padding: 0 35px;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        border: solid 2px transparent;
        background-clip: padding-box;
        -webkit-background-clip: padding-box;
        -moz-background-clip: padding-box;
        box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.03);
    }
    .container .card .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.5;
        transition: 0.5s;
    }
    .container .card .content .img {
        position: relative;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        overflow: hidden;
    }
     .container .card .content .img img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
     .container .card .content .cardContent h3 {
        font-weight: 500;
        font-size: inherit;
        text-align: center;
        margin: 20px 0 10px;
        line-height: 1.1em;
    }
    .container .card .sci {
        position: absolute;
        bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .container .card .sci li {
        margin: 0 20px;
        transform: translateY(40px);
        opacity: 0;
        transition: 0.5s;
        transition-delay: calc(0.1s * var(--i));
    }
    .container .card .sci li a {
        color: #ffae00;
    }
    .container .card .sci li a:hover {
        text-decoration: underline;
    }
    .container .card:hover .content {
        opacity: 1;
        transform: translateY(-20px);
    }
    .container .card:hover .sci li {
        transform: translateY(0px);
        opacity: 1;
    }
</style>