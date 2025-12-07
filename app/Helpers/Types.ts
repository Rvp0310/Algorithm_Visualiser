export interface RefreshTriggerProps {
    refreshTrigger: number;
}

export interface AlgoItem {
    name: string;
    component: React.FC<RefreshTriggerProps>;
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