import { profile } from '../data/profile';
import { groups } from '../data/constants';
export function Skills() {
  return (
    <section aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      {groups.map(group => {
        const items = profile.skills.filter(s => s.area === group);
        if (!items.length) return null;
        return (
          <div key={group}>
            <h3>{group}</h3>
            <ul>
              {items.map(s => (
                <li key={s.name}>
                  <strong>{s.name}:</strong> {s.level}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}