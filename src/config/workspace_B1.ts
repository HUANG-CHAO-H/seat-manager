import {SeatCellInfo, WorkspaceInfo} from "../type";
import {seatCalculate} from "../utils";
import background from '../../public/background.jpg';

const seatInfoMap = new Map<string | number, SeatCellInfo>();

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
        getSeatIndex: (row, column) => Number(groups[row][column]),
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

function getRowSeats(startX: number, startY: number, groups: string[][]) {
    return seatCalculate({
        startX,
        startY,
        row: groups.length,
        column: groups[0].length,
        width: 51,
        height: 31,
        textDirection: 'column-reverse',
        getSeatKey: (row, column) => groups[row][column],
        getSeatName: (row, column) => groups[row][column],
        getSeatIndex: (row, column) => Number(groups[row][column]),
    }).filter(s => Boolean(s.key));
}
getRowSeats(1, 651, [
    ['100', '101', '102', '103', '104', '105'],
    ['', '110', '109', '108', '107', '106'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1, 781, [
    ['', '111', '112', '113', '114', '115'],
    ['121', '120', '119', '118', '117', '116'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1, 911, [
    ['122', '123', '124', '125', '126', '127'],
    ['133', '132', '131', '130', '129', '128'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1, 1042, [
    ['', '134', '135', '136', '137', '138'],
    ['', '143', '142', '141', '140', '139'],
]).map(s => seatInfoMap.set(s.key, s));

getRowSeats(867, 613, [
    ['184', '185', '186', '187', '188'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(867, 717, [
    ['183', '182', '181', '180', '179'],
    ['174', '175', '176', '177', '178'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(867, 850, [
    ['173', '172', '171', '170', '169'],
    ['164', '165', '166', '167', '168'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(867, 981, [
    ['163', '162', '161', '160', '159'],
    ['154', '155', '156', '157', '158'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(867, 1116, [
    ['153', '152', '151', '150', '149'],
]).map(s => seatInfoMap.set(s.key, s));

getRowSeats(1171, 613, [
    ['189', '190', '191', '192', '193', '194'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1171, 717, [
    ['200', '199', '198', '197', '196', '195'],
    ['', '201', '202', '203', '204', '205'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1171, 850, [
    ['211', '210', '209', '208', '207', '206'],
    ['212', '213', '214', '215', '216', '217'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1171, 981, [
    ['223', '222', '221', '220', '219', '218'],
    ['224', '225', '226', '227', '228', '229'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1222, 1116, [
    ['234', '233', '232', '231', '230'],
]).map(s => seatInfoMap.set(s.key, s));

getRowSeats(1551, 850, [
    ['263', '264', '265', '266', '267', '268'],
    ['262', '261', '260', '259', '258', '257'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1551, 981, [
    ['251', '252', '253', '254', '255', '256'],
    ['250', '249', '248', '247', '246', '245'],
]).map(s => seatInfoMap.set(s.key, s));
getRowSeats(1602, 1116, [
    ['240', '241', '242', '243', '244'],
]).map(s => seatInfoMap.set(s.key, s));

const seatInfoArray: SeatCellInfo[] = Array(seatInfoMap.size);
for (const [,s] of seatInfoMap) seatInfoArray.push(s);

export const WorkspaceB1: WorkspaceInfo = {
    key: 'XueQin-B1',
    name: '学清嘉创大厦-B1',
    seatInfoMap: seatInfoMap,
    seatInfoArray: seatInfoArray,
    backgroundSrc: background,
}
