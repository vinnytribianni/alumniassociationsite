import React from 'react'
import '../CSS/Home.css'
import Lodge from '../Images/lodge_day.jpg'
const Home = () => {

    return (
        <div>
            <div class="main">
                <img src={Lodge} alt="lodge"></img>
            </div>
            <div className="content">
                <h2>Alpha Rho Alumni Association</h2>
                <br />
                <p>Welcome to the website of the Alpha Rho Alumni Association of Chi Psi Fraternity. We hope that it will allow all of those interested in staying in touch to learn about the exciting activities and events taking place at the Lodge or sponsored by the undergraduates or alumni.</p>
                <p>The Association is excited to announce that the first phase of "For the Rest of Our Lives" Capital Campaign is near completion. Our website provides a very easy opportunity to contribute to the campaign and we hope that you will give generously.</p>
                <p>Essentially the Lodge kitchen and apartment as well as the exteriors walls have all been either replaced or upgraded. It looks like a new building and with the new furniture, lights and blinds that were installed last semester, Alpha Rho is now one pretty classy looking place. We also had to spend $25,000 for the new boiler which was not in the budget.</p>
                <p>The Association would like to thank six Brothers who essentially made these first tier renovations possible. The treasure and/or time demonstrated by Brothers Hank Bartels, P 1945, Vince Le Blon, P 1977, Hank Bignell, P 1977, Bill Royce, P 1978, Bill Colgan, P 1983 and Nick Fabbroni, P 1985 is nothing short of spectacular! Thank you Brothers and thanks to many of you who provided generous and important gifts in our quest to raise $350,000!</p>
                <p>Ribbon cutting ceremonies will take place this Spring.  Please come back to our website to find out more about that much anticipated event. Thanks and don’t forget to think of Alpha Rho this month and always.</p>
                <p>Yours In The Bonds,</p>
                <p>Alpha Rho Alumni Association</p>
                <br />
                <p><b>A Thing of Spirit</b></p>
                <p>"Keeping ever before us the desire to be loyal to our Alma Mater and our Fraternity, the desire to develop the best that is in us but at the same time submerge our own interests in the interests of others, and the desire to be an active man in college, an affectionate and wise husband in the home, a tireless and good humored bread winner, and a clean sportsman in all recreations, we will slowly approach not only the ideal Chi Psi but the ideal citizen and American."</p>
                <p>- Roger M. Hawthorne, Bowdoin 1928</p>
                <br />
                <p><b>A Tribute to Fellowship</b></p>
                <p>Alpha Rho Night, August 11, 1989 was also the occasion for a surprise presentation to H.G. 'Bones' Lundberg, P 1924. Herbert Dunmeyer, Rho 1954, the moving spirit of the Alumni Association Committee, made the presentation of an original sculpture depicting Bones with his hands on the shoulders of every Brother whose life he had touched. Sitting in with Bones, alongside the sculpture is Thomas Storr, #1, P 1990.</p>
            </div>
        </div>
    );
};

export default Home;



