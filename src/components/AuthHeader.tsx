import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';

export default async function AuthHeader() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="fixed top-0 right-0 z-50 p-3">
      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          <span className="text-purple-300/80 text-sm">
            {claims?.name || claims?.username || 'User'}
          </span>
          <a
            href="/api/logto/sign-out"
            className="btn btn-xs bg-purple-800/60 border-purple-500/30 text-purple-200 hover:bg-purple-700"
          >
            Sign Out
          </a>
        </div>
      ) : (
        <a
          href="/api/logto/sign-in"
          className="btn btn-xs bg-amber-600/80 text-white border-0 hover:bg-amber-500"
        >
          ✨ Sign In
        </a>
      )}
    </div>
  );
}
