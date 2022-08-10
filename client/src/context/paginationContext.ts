import React from 'react';

interface IPagination {
  next: Function,
  back: Function,
  index: number,
  items: object[]
}

export const PaginationContext = React.createContext<IPagination>({} as IPagination);

export const PaginationProvider = PaginationContext.Provider;