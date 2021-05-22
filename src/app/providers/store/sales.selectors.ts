import { createSelector } from '@ngrx/store';
import { AppState } from "src/app/Models/App.State"

const SALES = (state:AppState)=>state.sales;

export const getAllSalesSelector =createSelector(
    SALES,
    (state)=>state.sales
);

export const getLoaginStatusSelector =createSelector(
    SALES,
    (state)=>state.loading
);

export const getTotalCountSelector =createSelector(
    SALES,
    (state)=>state.count
);

export const getTotalAcumulatedSelector =createSelector(
    SALES,
    (state)=>state.totalAcumulated
);


export const getTotalSalesRemoveSelector =createSelector(
    SALES,
    (state)=>state.salesIds
);

export const getCurrentTicketSelected=createSelector(
    SALES,
    (state)=>state.currentTiket
)

export const getLoadingTicketSelected=createSelector(
    SALES,
    (state)=>state.loadingTicket
)

export const getDeletingStatus = createSelector(
    SALES,
    (state)=>state.isDeletingSales
    );
