export interface SortProps {
    refreshTrigger: number;
    speed: number;
    arraylen: number;
}

export interface AlgoItem {
    name: string;
    component: React.FC<SortProps>;
}

export type SortingAction = 
{
    index: [number, number]; action: 'compare';
} | {
    index: [number, number]; action: 'swap';
} | {
    index: number; action: 'overwrite'; newVal: number
} | {
    action: 'done'
}