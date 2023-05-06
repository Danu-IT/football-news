import { MdOutlineDashboard, MdHighlightAlt } from 'react-icons/md'
import { BsCameraVideoFill, BsShopWindow } from 'react-icons/bs'
import { VscSymbolConstant } from 'react-icons/vsc'
import { BiNews } from 'react-icons/bi'
 
export const menu = [
    {id: 'dashboard', element: MdOutlineDashboard, text: 'Dashboard'},
    {id: 'live', element: BsCameraVideoFill, text: 'Live Football'},
    {id: 'standing', element: VscSymbolConstant, text: 'Standings'},
    {id: 'highlight', element: MdHighlightAlt, text: 'Highlights'},
    {id: 'shop', element: BsShopWindow, text: 'Shop'},
    {id: 'fire', element: BiNews, text: 'News'},
]