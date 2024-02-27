export interface IPositionRoamer {
    doEnter: () => Promise<void>,
    doRoam: () => Promise<void>,
}