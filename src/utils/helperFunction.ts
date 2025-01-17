export function getTimeLeft(targetTime:any) {
    const targetDate = new Date(targetTime);
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    if (timeDifference <= 0) {
      return "00:00:00";
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const formattedDays = String(days).padStart(2, "0");

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    // const formattedSeconds = String(seconds).padStart(2, '0');

    return (
      // loading ? 
      // "Loading..." :
       `${formattedDays}d:${formattedHours}h:${formattedMinutes}m`
    )
  }



// export function handleRouteData(data,pathName,){

//   const queryString = new URLSearchParams(data).toString();
//   router.push(`/tournament?${queryString}`);


// }