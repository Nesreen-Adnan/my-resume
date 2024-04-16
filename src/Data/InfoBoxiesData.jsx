import {
    FaRegAddressCard,
    FaMapLocationDot,
    FaCalendarDays,
} from "react-icons/fa6";
let i = 0,
    delay = .4,
    InfoBoxiesDetails = [
        {
            id: i++,
            icon: <FaRegAddressCard />,
            header: "nationality",
            detail: "yemeni",
            delay: `${delay*i}s`,
        },
        {
            id: i++,
            icon: <FaMapLocationDot />,
            header: "adress",
            detail: "taif, saudi arabia",
            delay: `${delay*i}s`,
        },
        {
            id: i++,
            icon: <FaCalendarDays />,
            header: "age",
            detail: `${calcAge()} years old`,
            delay: `${delay*i}s`,
        },
    ];
function calcAge() {
    let date = Date.now(),
        birthday = new Date("2003-1-30"),
        age = date - birthday,
        ageByYears = Math.floor(age / 1000 / 60 / 60 / 24 / 365.25);
    return ageByYears;
};

export default InfoBoxiesDetails;
