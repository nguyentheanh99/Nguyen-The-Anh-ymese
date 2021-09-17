import moment from 'moment';

export const formatTime = (data) => {
    return moment(data).format('HH:mm');
};

export const formatPeriodTime = (startTime, endTime) => {
    const diff = moment.duration(moment(endTime).diff(moment(startTime)));
    return `${diff.asHours()}g ${diff.get('minutes')}phút` ;
};

export const periodTime = (startTime, endTime) => {
    return moment(endTime).diff(moment(startTime));
};