import { ContinueReadingCard, RecentlyAddedBooks, SplitViewCard } from "@/components"

// ruff ignore:
// +-----------------------------------------+
// | [Continue Reading]                      |
// | Book cover | Title | Progress | Resume |
// +-----------------------------------------+

// | Your Library       | GitHub Sync        |
// | 28 books in total  | @rushi (Synced ✓)  |
// | Reading (5)        | Last sync: 1h ago  |
// | Completed (12)     | [Sync Now]         |
// +-----------------------------------------+

// | Recent Bookmarks   | Recent Notes       |
// | • Title - Pg 45    | • Title - “Quote”  |
// | • Title - Pg 102   | • Title - “Idea”   |
// +-----------------------------------------+

// | Recently Added Books (Gallery)          |
// +-----------------------------------------+

export const DashboardPage = () => {

  return (
    <div>
      {/* Style Idea: Use glass style where the bg is blure and feel or look like glass. */}
      <ContinueReadingCard />
      <SplitViewCard />
      <SplitViewCard />
      <RecentlyAddedBooks />
    </div>
  )
}