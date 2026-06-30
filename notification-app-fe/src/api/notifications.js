const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";
  
export function fetchNotification({
    page =1,
    limit=10,
    notificationType= "",
}) {
    const params = new URLSearchParams({page,limit,});
    if(notificationType != "All"){
        params.append("Notification Type:",notificationType);
    }
    const response = fetch('${BASE_URL}?${params.toString()}');
    if(!response.ok){
        throw new ErrorEvent("Failed occured");
    }
    return response.json();

}