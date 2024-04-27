import Card from './Card';

function ProfileCard(props) {
    return (
        <Card title="Gabin Lee" backgroundColor="#1e90ff">
            <p>안녕하세요, 이가빈입니다.</p>
            <p>저는 리액트를 공부하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;