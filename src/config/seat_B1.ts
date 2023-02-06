import {SeatCellInfo} from "../type";
import {seatCalculate} from "../utils";

export const seatInfoMap = new Map<string | number, SeatCellInfo>();

function getColumnSeats(startX: number, startY: number, groups: string[][]) {
    return seatCalculate({
        startX,
        startY,
        row: groups.length,
        column: groups[0].length,
        width: 31,
        height: 51,
        textDirection: 'column-reverse',
        getSeatKey: (row, column) => groups[row][column],
        getSeatName: (row, column) => groups[row][column],
    }).filter(s => Boolean(s.key));
}
getColumnSeats(98, 60, [
    ['090', '081'],
    ['089', '082'],
    ['088', '083'],
    ['087', '084'],
    ['086', '085'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(232, 60, [
    ['080', '071'],
    ['079', '072'],
    ['078', '073'],
    ['077', '074'],
    ['076', '075'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(430, 111, [
    ['070', '063'],
    ['069', '064'],
    ['068', '065'],
    ['067', '066'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(563, 111, [
    ['062', '055'],
    ['061', '056'],
    ['060', '057'],
    ['059', '058'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(696, 111, [
    ['054', '047'],
    ['053', '048'],
    ['052', '049'],
    ['051', '050'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(875, 60, [
    ['046', '037'],
    ['045', '038'],
    ['044', '039'],
    ['043', '040'],
    ['042', '041'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(1008, 60, [
    ['036', '027'],
    ['035', '028'],
    ['034', '029'],
    ['033', '030'],
    ['032', '031'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(1140, 60, [
    ['', ''],
    ['', ''],
    ['', ''],
    ['026', '023'],
    ['025', '024'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(1272, 60, [
    ['022', '013'],
    ['021', '014'],
    ['020', '015'],
    ['019', '016'],
    ['018', '017'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(1407, 60, [
    ['012', ''],
    ['011', '004'],
    ['010', '005'],
    ['009', '006'],
    ['008', '007'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(1538, 162, [
    ['003'],
    ['002'],
    ['001'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(105, 377, [
    ['091', '096'],
    ['092', '095'],
    ['093', '094'],
]).map(s => seatInfoMap.set(s.key, s));
getColumnSeats(238, 377, [
    ['097'],
    ['098'],
    ['099'],
]).map(s => seatInfoMap.set(s.key, s));

export const seatInfoArray: SeatCellInfo[] = Array(seatInfoMap.size);
for (const [,s] of seatInfoMap) seatInfoArray.push(s);
