import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/History.css'

const History = () => {
  const location = useLocation();
  const { id } = location.state || {}; // Ensure this is being passed correctly
  const [stateId, setStateId] = useState(parseInt(id, 10)); // Convert to number and set as initial state

  useEffect(() => {
    // Check if id is present and is different from current stateId
    const newId = parseInt(id, 10); // Also convert this to number
    if (newId && newId !== stateId) {
      setStateId(newId);
    }
  }, [id, stateId]); 

  // Function to render content based on stateId
  const renderContent = () => {
    switch(stateId) {
      case 1:
        return (
          <div className="content-ourhistory">
            <h2>Our History</h2>
            <h3>The Early Years</h3>
            <p>Fraternity life at Rutgers began as early as 1845. By the 1870s, seven national fraternities existed, but a small group of students sought a bond stronger than that offered by the fraternities then “On the Banks of the Raritan.” Fourteen men, 11 of whom were Phi Beta Kappa members, formed Alpha Theta, a local society, and sought national affiliation. The group selected Chi Psi through the influence of Alfred DeWitt Mason, Amherst 1877, then a student at the Theological Seminary. Chi Psi granted Alpha Theta’s petition for membership, and on March 14, 1879, Chi Psi initiated nine of the men into Alpha Rho.</p>
            <p>Alpha Rho exerted leadership early by establishing the first fraternity house at Rutgers in 1887. The fledgling Alpha’s alumni purchased a building at 114 College Avenue, which formerly housed a girls’ school. The new Lodge was several blocks from the center of college life in those days, but today the Lodge occupies an enviable position in the heart of the College Avenue campus.</p>
            <h3>The 20th Century</h3>
            <p>In the beginning, initiations were informal and might occur after any meeting, to be followed by ice cream and cake at Mammy Bradley’s, Bates’ or Wykoff’s. Now, the initiation ceremony is well attended by alumni and is an occasion for dinner and formal dress. Some initiations are particularly significant. A notable moment came during World War I, when the Lodge served as a barracks and the Brothers met in the New Brunswick law offices of Brother A. Dudley Watson, Rho 1915. The war had severely depleted the pool of possible members, 70 Rho members served in the armed forces and the survival of the Alpha was in question. Far more festive was the initiation of 1926, attended by John Martin Thomas, Middlebury 1890, shortly after his appointment as the only Chi Psi to serve as President of Rutgers. The Golden Jubilee in 1929 brought four of the six surviving founders, and each became the center of attention.</p>
            <p>Rho has shared information with its alumni on a regular basis. The first communications were personal letters written twice a year to each alumnus, then printed letters, then in 1925 came The RhoBoat, a publication printed at least twice a year to this day. Rho was prominent in founding The Purple and Gold, Chi Psi’s national publication, and both William Florance, Rho 1885, and Harry Dayton, Rho 1892, have served as Editor. Alpha Rho has hosted seven Chi Psi Conventions: 1883 in New York; 1898 in Philadelphia; 1907 in New York; 1926 in New Brunswick; 1964 in New Brunswick; and 1989 in New Brunswick for its 110th Anniversary.</p>
            <p>Alpha Rho has been actively interested in its sister Alphas. Two years after its founding, it was instrumental in the founding of Alpha Xi at Stevens, and in 1894 in the founding of Alpha Beta Delta at Lehigh. Rho and its alumni also played supporting roles in the founding of Alpha Kappa Delta at Yale and Alpha Psi Delta at Colorado, and in the revivals of Alpha Pi at Union and Sigma at North Carolina.</p>
            <p>Alpha Rho paved the way at Rutgers by hiring a resident housemother in 1931, a tradition that continued into the 1960s. Housemothers managed the kitchen and created a home environment for live-in members, rather than a boarding house feel. Another innovation was the live-in Graduate Resident Preceptor program begun in 1937, and provided a faculty liaison and tutor and confidential advisor to the active members on academic and personal concerns.</p>
            <p>Alpha Rho continued operations during World War II, with Edwin Florence, Rho 1914, serving as #4 (Treasurer). Unaffiliated students and others rented rooms in the Lodge while Brothers came and went, but fraternity operations generally ceased. Rho members in the armed forces received Service bulletins; 191 Rho members served in the war, winning 56 citations and sacrificing 11 Brothers for the cause of freedom.</p>
            <p>Alpha Rho won the Thayer Trophy, honoring Chi Psi’s most outstanding Alpha, in 1957, and 8 Chi Psis played on Rutgers’ undefeated 1961 football team.</p>
            <p>The Centennial of Alpha Rho in 1979 brought more than 200 alumni and undergraduates to the Lodge, and the Centennial of the Lodge at 114 College Avenue was feted in 1987.</p>
            <h3>The Re-Founding</h3>
            <p>Alpha Rho lost its charter in 1999 due to a series of mishaps that reflected so poorly on Chi Psi that both the local alpha alumni association and the national had no choice but to close it. Indeed, liability insurance premiums increased beyond the point where the actives could afford the payments. The death of Bones Lundberg and the simultaneous retirement of Vince LeBlon, P 1977, and Henry Bignell, P 1977, from active service on behalf of the alpha left a visible void in the alumni leadership which may have indirectly led to an Alpha that was “floundering” to say the least.</p>
            <p>Thus, when the Chi Psi National Convention rendered the alpha dormant it was naturally a sad day for Alpha Rho and its one thousand living alumni. Almost immediately, however, the alumni took charge in focusing on the refounding with Moly Hung, P 1988, and Doug Kortrey, P 1988 taking the lead. And in January 2004 the Alpha‘s alumni hosted fifty prospects in the living room of the Lodge while over eighty alumni Brothers stood in the foyer of the Lodge and listened to Mike Illuzzi, P 1977, give a talk about what Chi Psi represents and why they should consider joining this fraternity at this time in its history. With help from Jon Carnegie, P 1988, and John Logan, Epsilon Delta 1989, who relocated with his wife to New Jersey, two pledge classes were formed and in August 2004 the National Convention approved Rho’s application for full Alpha status.</p>
            <p>On January 15, 2005 the Alpha celebrated its refounding by initiating its initial pledge class under the able direction of Bill Royce, P 1978, who has conducted ceremonies at Alpha Rho since 1980. Thus, in just over five years Alpha Rho traveled from dormancy to vibrancy and it is no doubt true that such an adventure would not have taken place without its alumni; alumni who take to heart the adage, ”Once a Chi Psi, Always a Chi Psi.”</p>
            <p>Rutgers has changed significantly over the years – experiencing the admission of women, designation as the state university and growth in undergraduate enrollment – but the role of Alpha Rho has remained the same: providing each Rho man a spiritual strength and physical base on a large and often impersonal University.</p>
          </div>
        );
      case 2:
        return (
          <div className="content-rhoboat">
            <h2>RhoBoat</h2>
            <h3>About</h3>
            <p>The RhoBoat has been published since 1925...</p>
            <h3>Past Years</h3>
            <p>Links to past years RhoBoats</p>
          </div>
        );
      case 3:
        return (
          <div className="content-lostalum">
            <h2>Lost Alumni</h2>
            <p>We attempt to keep the opportunities available within Chi Psi known to all. Sometimes we lose touch especially given the mobile world in which we live. Help us reunite with those Brothers for whom we have lost contact.</p>
            <p>Several times per year we will list the names of those Brothers for whom we need updated contact information.  Should you have current information for one of these Brothers, please contact us and let us know.</p>
          </div>
        );
      default:
        return (
          <div className="content">
            <h2>No specific content</h2>
            <p>No specific content available for this ID.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <h1>History Component</h1>
      <p>Conditional rendering based on ID: {stateId}</p>
      {renderContent()} 
    </div>
  );
};

export default History;

