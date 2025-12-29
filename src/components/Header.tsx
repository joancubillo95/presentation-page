import { profile } from '../data/profile';

export function Header() {
  return (
    <header>
      <h1>{profile.name}</h1>
      <p>{profile.title} · {profile.location}</p>
      <p>{profile.summary}</p>
      <nav aria-label="Profile links">
        <ul>
          {profile.links.map(link => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}