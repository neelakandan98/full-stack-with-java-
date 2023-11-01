import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../App.css';

const Search = ({value , handleSearchKey , formSubmit }) =>
{
    return(
        <div class="searchBar">
            <form class="form-inline row mt-2 ml-0" >
                <div class="col-4"></div>
                <div class="form-group col-4">
                    <input type="search" onChange={handleSearchKey} class="form-control" id="inputPassword2" placeholder="Search" value={value} />
                </div>
                <div class="form-group col-4">
                    <input type="button" onclick={formSubmit} class="btn btn-primary col-2" value="Go" />
                </div>
            </form>
        </div>
    )
}

export default Search