import Title from '../common/Title/Title';
import TVProgramsList from '../common/lists/TVProgramsList'
export default function EtherWidget({ title, items }) {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}
