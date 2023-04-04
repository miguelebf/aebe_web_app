// third-party
import { FormattedMessage } from 'react-intl';
//import Tooltip from '@mui/material/Tooltip';
//import IconButton from '@mui/material/IconButton';

// assets
import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined,
  CloudOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  StockOutlined,
  AreaChartOutlined,
  DollarOutlined
} from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  StopOutlined,
  BorderOutlined,
  SmileOutlined,
  GatewayOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined,
  CloudOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  StockOutlined,
  AreaChartOutlined,
  DollarOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other = {
  id: 'menu',
  title: <FormattedMessage id="Menu" />,
  type: 'group',
  children: [
    {
      id: 'exportaciones',
      title: <FormattedMessage id="Exportaciones" />,
      type: 'item',
      url: '/exportaciones',
      icon: icons.AreaChartOutlined
    },
    {
      id: 'produccion',
      title: <FormattedMessage id="Produccion" />,
      type: 'item',
      url: '/produccion',
      icon: icons.StockOutlined
    },
    {
      id: 'precios',
      title: <FormattedMessage id="Precios" />,
      type: 'item',
      url: '/precios',
      icon: icons.DollarOutlined
    },
    {
      id: 'clima',
      title: <FormattedMessage id="Clima" />,
      type: 'item',
      url: '/clima-private',
      icon: icons.CloudOutlined
    },
    {
      id: 'repositorio',
      title: <FormattedMessage id="Repositorio" />,
      type: 'item',
      url: '/repositorio',
      icon: icons.DatabaseOutlined
    },
    {
      id: 'data',
      title: <FormattedMessage id="Data" />,
      type: 'item',
      url: '/data',
      icon: icons.BarChartOutlined
    }
  ]
};

export default other;
