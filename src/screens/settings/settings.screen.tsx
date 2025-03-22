import { Layout, Header } from '../../components';

export const SettingsScreen: React.FC = () => {

    return (
        <Layout isScrollable={false}>
            <Header title="Settings" showBackButton />
        </Layout>
    );
};
