import React from 'react';
import { useState, useEffect } from 'react';

function Pagination(props) {
  const { totalRecords = null, pageLimit = 3, pageNeighbours = 0 } = props;
  const [page, setPage] = useState(1);

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 3;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    // pageNeighbours can be: 0, 1 or 2
    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;