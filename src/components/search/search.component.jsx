import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './search.styles';
import { ResultsContext } from '../../contexts/results/results.context';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { setContext } = useContext(ResultsContext);
  const { push } = useHistory();

  useEffect(() => {
    setContext({ input });
    // eslint-disable-next-line
  }, [input]);

  const handleChange = e => {
    if (input.length > 1) {
      push('/search');
    }
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    push(`/search/${input}`);
    setContext({ input });
    setInput('');
  };

  const { search, searchIcon, inputRoot, inputInput } = useStyles();

  return (
    <form className={search} onSubmit={handleSubmit}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={input}
        onChange={handleChange}
        placeholder='Search…'
        classes={{
          root: inputRoot,
          input: inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </form>
  );
};

export default SearchBar;
