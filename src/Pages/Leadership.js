import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Leadership.css'
import Lodge from '../Images/lodge_day.jpg'

const Leadership = () => {
  const location = useLocation();
  const { id } = location.state || {}; // Ensure this is being passed correctly
  const [stateId, setStateId] = useState(parseInt(id, 10)); // Convert to number and set as initial state

  useEffect(() => {
    const newId = parseInt(id, 10);
    if (newId && newId !== stateId) {
      setStateId(newId);
    }
  }, [id, stateId]);

  const renderContent = () => {
    switch(stateId) {
      case 1:
        return (
          <div className='content'>
            <h2>Officers & Trustees</h2>
            <br />
            <p><b>Executive Board</b></p>
            <p>President - Vincent Le Blon, P 1977</p>
            <p>First VP / Alumni Affairs - William A. Royce, P 1978</p>
            <p>Second VP / Alpha Affairs - William T. Starnick, P 2007</p>
            <p>Third VP / Property Mgt.	- Richard S. Perrella, P 1993</p>
            <p>Treasurer - Brian E. Redin, P 2006</p>
            <br /><br />
            <p><b>Trustees</b></p>
            <div className="flexrow">
              <div className="box">
                <p><u>Term Expires 2009</u></p>
                <p>Chris M. DiMuro, P 1985</p>
                <p>Dr. Michael C. Illuzzi, P 1977</p>
                <p>Vacant</p>
              </div>
              <div className="box">
                <p><u>Term Expires 2010</u></p>
                <p>Barry Franzyshen, P 1977</p>
                <p>James F. Hyland, P 1977</p>
                <p>Gary H. Bowne, P 1976</p>
              </div>
              <div className="box">
                <p><u>Term Expires 2011</u></p>
                <p>Ed J. Boccher, P 1977</p>
                <p>William A. Royce, P 1978</p>
              </div>
              <div className="box">
                <p><u>Actives</u></p>
                <p>Brendan Cassidy, P 2009, #1</p>
                <p>Yev Feinstein, P 2009, #4</p>
              </div>
            </div>
            <p><b>Committees</b></p>
            <div className="flexrow">
            <div className='box'>
                <p><u>Alumni Affairs</u></p>
                <p>Doug Kortrey, P 1988</p>
                <p>Marc A. Greenberger, P 1981</p>
                <p>Kevin R. Haynes, P 1981</p>
                <p>Andy J. Little, P 1989</p>
                <p>Don A. Ottaunick, P 1980</p>
                <p>Andy Roettger, P 1984</p>
              </div>
              <div className="box">
                <p><u>Alpha Affairs</u></p>
                <p>Dr. Michael C. Illuzzi, P 1977</p>
                <p>William Starnick, P 2007</p>
              </div>
              <div className='box'>
                <p><u>Property Management</u></p>
                <p>Jack P. McCarthy, P 1990</p>
                <p>Hank D. Bignell, P 1977</p>
                <p>Jeff Casaletto, NΔ 1996</p>
                <p>Niels H. Jorgensen, P 1989</p>
                <p>Rick L. Werley, P 1992</p>
                <p>Nicholas L. Fabbroni, P 1985</p>
              </div>

            </div>
          </div>
        );
      case 2:
        return (
          <div className="content">
            <h2>Lodge Management</h2>
            <br />
            <p>Lodge Management is headed up by Rich Peralta, P 1995, who has significant expertise in this area.  Rich also serves as a member of the Association's Board of Trustees.  With renovations soon to be complete, Rich will be working with the actives on issues pertaining to recycling, safety, risk management and dining room protocols.</p>
          </div>
        );
      case 3:
        return (
          <div className='content'>
            <h2>Alpha & Alumni Affairs</h2>
            <br />
            <p><b>Alpha Affairs</b></p>
            <p>The Alpha Rho undergraduates maintain an active and vibrant academic and social life. Their scholarship activities are supervised by the Resident Academic Advisor who assists the leadership in offering the full complement of programs sponsored by the National Chi Psi Educational Trust. These programs include retreats for the purpose of honing management skills as well as programs that assist the actives with improving scholarship and establishing career goals. The costs of these programs are often subsidized by the Alpha Rho Memorial Foundation which has been dedicated since 1949 with instilling the values of academic excellence. The Foundation also provides support of outstanding scholarship efforts which provide incentives to the actives relative to their academic work.</p>
            <p>The Resident Academic Advisor, who lives in the newly refurbished “apartment”, also works closely with each active in providing assistance with meaningful co-curricular and extra-curricular activities that allow for realistic and productive “out of classroom experiences” which redound to the benefit of each brother.</p>
            <p><i>If you are able to assist the Alpha Advisor in providing internships and/or experiences for active Brothers, then please contact the Alpha Advisor at the Lodge.</i></p>
            <p>Since the re-founding of the Alpha in 2004, the actives have led the campus community in philanthropy. In each year since the refounding the actives have led the way in raising money for ALS, cancer and blood disorder research. Indeed, for each of the last three years the Chair of the Rutgers Dance Marathon has been a Chi Psi Brother.</p>
            <br />
            <p><b>Alumni Affairs</b></p>
            <p>The Alpha Rho Alumni Association meets the second Wednesday of each month at The Lodge at seven thirty. The actives often participate and both the #1 and #4 each maintain voting privileges.</p>
            <p>The Association sponsors many events including a Deans Trustees Banquet where the Trustees have the opportunity to meet and mingle with the Rutgers administration.</p>
            <p>The Association also sponsors the Resident Academic Advisor position which is currently held by Dr. Michael C. Illuzzi, P 1977. Brother Illuzzi works full time as the Asst Superintendent of Schools for Somerset County Vocational Technical District but maintains also an active schedule with actives by encouraging scholarship, facilitating career guidance programs and by providing academic and personal counseling. He also works to maintain hallowed Lodge traditions such as formal dining, C Formal and Initiation Banquets.</p>
            <p>Currently, the Association is working with Brother Illuzzi to provide career counseling assistance to the actives. If you have available internship positions, paid or unpaid, for Summer 2009 for our rising seniors please contact Dr. Michael C. Illuzzi, P 1977.</p>
            <p>Finally, the Association sponsors both the Annual Santa Party and our Birthday Wishes Program which is ably undertaken by Brother William A. Royce, P 1978.</p>
            <p>To become involved in any aspect of the Association, please contact Vincent Le Blon, P 1988, President of the Alpha Rho Alumni Association.</p>
          </div>
        );
      default:
        return (
          <div className='content'>
            <h2>Officers & Trustees</h2>
            <br />
            <p><b>Executive Board</b></p>
            <p>President - Vincent Le Blon, P 1977</p>
            <p>First VP / Alumni Affairs - William A. Royce, P 1978</p>
            <p>Second VP / Alpha Affairs - William T. Starnick, P 2007</p>
            <p>Third VP / Property Mgt.	- Richard S. Perrella, P 1993</p>
            <p>Treasurer - Brian E. Redin, P 2006</p>
            <br /><br />
            <p><b>Trustees</b></p>
            <div className="flexrow">
              <div className="box">
                <p><u>Term Expires 2009</u></p>
                <p>Chris M. DiMuro, P 1985</p>
                <p>Dr. Michael C. Illuzzi, P 1977</p>
                <p>Vacant</p>
              </div>
              <div className="box">
                <p><u>Term Expires 2010</u></p>
                <p>Barry Franzyshen, P 1977</p>
                <p>James F. Hyland, P 1977</p>
                <p>Gary H. Bowne, P 1976</p>
              </div>
              <div className="box">
                <p><u>Term Expires 2011</u></p>
                <p>Ed J. Boccher, P 1977</p>
                <p>William A. Royce, P 1978</p>
              </div>
              <div className="box">
                <p><u>Actives</u></p>
                <p>Brendan Cassidy, P 2009, #1</p>
                <p>Yev Feinstein, P 2009, #4</p>
              </div>
            </div>
            <p><b>Committees</b></p>
            <div className="flexrow">
            <div className='box'>
                <p><u>Alumni Affairs</u></p>
                <p>Doug Kortrey, P 1988</p>
                <p>Marc A. Greenberger, P 1981</p>
                <p>Kevin R. Haynes, P 1981</p>
                <p>Andy J. Little, P 1989</p>
                <p>Don A. Ottaunick, P 1980</p>
                <p>Andy Roettger, P 1984</p>
              </div>
              <div className="box">
                <p><u>Alpha Affairs</u></p>
                <p>Dr. Michael C. Illuzzi, P 1977</p>
                <p>William Starnick, P 2007</p>
              </div>
              <div className='box'>
                <p><u>Property Management</u></p>
                <p>Jack P. McCarthy, P 1990</p>
                <p>Hank D. Bignell, P 1977</p>
                <p>Jeff Casaletto, NΔ 1996</p>
                <p>Niels H. Jorgensen, P 1989</p>
                <p>Rick L. Werley, P 1992</p>
                <p>Nicholas L. Fabbroni, P 1985</p>
              </div>

            </div>
          </div>
        );
    }
  };

  return (
    <div className="main">
      <img src={Lodge} alt="lodge"></img>
      {renderContent()} 
    </div>
  );
};

export default Leadership;
