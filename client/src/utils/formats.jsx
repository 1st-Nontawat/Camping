import moment from "moment";
import numeral from "numeral";

export const formatNumber = (number) => {
    return numeral(number).format("0,0");
};



export const formatDate = (date) => {
    return moment(date).local("th").format("ll");
};