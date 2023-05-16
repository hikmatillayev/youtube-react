import { Stack } from "@mui/material"
import { category } from "../../constants"
import { colors } from '../../constants/colors'

const Category = () => {
    return (
        <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
            {category.map(item => (
                <button key={item.name} className="category-btn" style={{ borderRadius: '0', padding: '15px' }}>
                    <span style={{ color: colors.secondary, marginRight: '15px' }}>{item.icon}</span>
                    <span>{item.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Category