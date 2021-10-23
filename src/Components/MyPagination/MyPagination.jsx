import {Pagination, PaginationItem, Stack} from "@mui/material";
import {Link} from "react-router-dom";

const MyPagination = (props) => {

    return(
        <Stack spacing={3}>
            <Pagination
                page={props.page}
                count={props.count}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        to={`/pokemons${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
            />
        </Stack>
    );
}

export default MyPagination;