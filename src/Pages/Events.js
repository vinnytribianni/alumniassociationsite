import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lodge from '../Images/lodge_day.jpg'
import '../CSS/Events.css'

const Events = () => {
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
            <h2>Annual Dart Tournament</h2>
            <p><b>About</b></p>
            <p>Once a year since 1992, the Alumni Brothers of Alpha Rho of Chi Psi have gathered for the purposes of fellowship and gentlemanly competition at their beloved game of darts.  With nearly one hundred Brothers attending each year, the tournament has become an annual homecoming for numerous Brothers and a spirited competition for those who have loved the game of darts since their undergraduate days at the Lodge.</p>
            <p>Listed below are the all-time Champions dating back to 1992 when the 1st Annual Tournament was held at the home of Brother Seamus Dolan, P 1986.  Details for each year's Tournament including a recap and individual and team statistics are available by selecting the respective year below.</p>
            <p>The Brothers of Alpha Rho are indebted to Brother Brendan Dolan, P 1986, for his leadership and contributions in coordinating numerous Tournaments over the years, maintaining detailed statistics of individual and team scores and providing much-anticipated recaps following each year's Tournament. </p>
            <p>Brother Dolan has also maintained individual and team records dating back to the 1st Annual Tournament in 1992.  A full listing of these records is available via the link below.</p>
            <p><b>All-Time Results</b></p>
            <p>2012 / 21st Annual - Andy Little / Rob Carney</p>
            <p>2011 / 20th Annual - Andy Little / Rob Carney</p>
            <p>2010 / 19th Annual - John Grogan / David Shanosky</p>
            <p>2009 / 18th Annual - David Hopkins / Charlie Ruegger</p>
            <p>2008 / 17th Annual - Charlie Ruegger / David Hopkins</p>
            <p>2007 / 16th Annual - John Grogan / David Shanosky</p>
            <p>2006 / 15th Annual - John Grogan / David Shanosky</p>
            <p>2005 / 14th Annual - John Grogan / David Shanosky</p>
            <p>2004 / 13th Annual - Pete Castillo / Dave Selk</p>
            <p>2003 / 12th Annual - Chris DiMuro / Dave Selk</p>
            <p>2002 / 11th Annual - Andy Little / Rob Carney</p>
            <p>2001 / 10th Annual - Mike Lenk / Dave Selk</p>
            <p>2000 / 9th Annual - Charlie Ruegger / David Hopkins</p>
            <p>1999 / 8th Annual - Charlie Ruegger / David Hopkins</p>
            <p>1998 / 7th Annual - Scott DeNardo / Dave Shanosky</p>
            <p>1997 / 6th Annual - Seamus Dolan / Brendan Dolan</p>
            <p>1996 / 5th Annual - Marc Greenberger / Mike Letzter</p>
            <p>1995 / 4th Annual - Pete Castillo / Dave Selk</p>
            <p>1994 / 3rd Annual - Seamus Dolan / Brendan Dolan</p>
            <p>1993 / 2nd Annual - Seamus Dolan / Brendan Dolan</p>
            <p>1992 / 1st Annual - Pete Castillo / Dave Selk</p>
          </div>
        );
      case 2:
        return (
          <div className='content'>
            <h2>Annual Golf Tournament</h2>
            <p><b>About</b></p>
            <p><b>All-Time Results</b></p>
          </div>
        );
      default:
        return (
          <div className='content'>
            <h2>Annual Dart Tournament</h2>
            <p><b>About</b></p>
            <p>Once a year since 1992, the Alumni Brothers of Alpha Rho of Chi Psi have gathered for the purposes of fellowship and gentlemanly competition at their beloved game of darts.  With nearly one hundred Brothers attending each year, the tournament has become an annual homecoming for numerous Brothers and a spirited competition for those who have loved the game of darts since their undergraduate days at the Lodge.</p>
            <p>Listed below are the all-time Champions dating back to 1992 when the 1st Annual Tournament was held at the home of Brother Seamus Dolan, P 1986.  Details for each year's Tournament including a recap and individual and team statistics are available by selecting the respective year below.</p>
            <p>The Brothers of Alpha Rho are indebted to Brother Brendan Dolan, P 1986, for his leadership and contributions in coordinating numerous Tournaments over the years, maintaining detailed statistics of individual and team scores and providing much-anticipated recaps following each year's Tournament. </p>
            <p>Brother Dolan has also maintained individual and team records dating back to the 1st Annual Tournament in 1992.  A full listing of these records is available via the link below.</p>
            <p><b>All-Time Results</b></p>
            <p>2012 / 21st Annual - Andy Little / Rob Carney</p>
            <p>2011 / 20th Annual - Andy Little / Rob Carney</p>
            <p>2010 / 19th Annual - John Grogan / David Shanosky</p>
            <p>2009 / 18th Annual - David Hopkins / Charlie Ruegger</p>
            <p>2008 / 17th Annual - Charlie Ruegger / David Hopkins</p>
            <p>2007 / 16th Annual - John Grogan / David Shanosky</p>
            <p>2006 / 15th Annual - John Grogan / David Shanosky</p>
            <p>2005 / 14th Annual - John Grogan / David Shanosky</p>
            <p>2004 / 13th Annual - Pete Castillo / Dave Selk</p>
            <p>2003 / 12th Annual - Chris DiMuro / Dave Selk</p>
            <p>2002 / 11th Annual - Andy Little / Rob Carney</p>
            <p>2001 / 10th Annual - Mike Lenk / Dave Selk</p>
            <p>2000 / 9th Annual - Charlie Ruegger / David Hopkins</p>
            <p>1999 / 8th Annual - Charlie Ruegger / David Hopkins</p>
            <p>1998 / 7th Annual - Scott DeNardo / Dave Shanosky</p>
            <p>1997 / 6th Annual - Seamus Dolan / Brendan Dolan</p>
            <p>1996 / 5th Annual - Marc Greenberger / Mike Letzter</p>
            <p>1995 / 4th Annual - Pete Castillo / Dave Selk</p>
            <p>1994 / 3rd Annual - Seamus Dolan / Brendan Dolan</p>
            <p>1993 / 2nd Annual - Seamus Dolan / Brendan Dolan</p>
            <p>1992 / 1st Annual - Pete Castillo / Dave Selk</p>
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

export default Events;
