import React from "react";
import { BiSearch } from "react-icons/bi";
import "./styles.scss";
const Search = ({ sortItems, filter, setFilter, handleSearch }) => {
  return (
    <div className="blog__buscador">
      <div className="blog__buscador__filtro">
        <label htmlFor="fltro"> Filtro por Categoria</label>
        <select
          name="filtro"
          id="filtro"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value={sortItems.date}>Elige una categoria</option>
          <option value={sortItems.backend}>Desarrolo backend</option>
          <option value={sortItems.fronend}>Desarrolo frontend</option>
        </select>
      </div>

      <div className="blog__buscador__buscar">
        <BiSearch className="icon" />
        <input
          type="text"
          placeholder="Buscar.."
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
};

export default React.memo(Search);
