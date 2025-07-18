import { ContinueReadingCard, RecentlyAddedBooks, SplitViewCard } from "@/components"

// TODO: ruff ignore:
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
      <ContinueReadingCard />
      <SplitViewCard />
      <SplitViewCard />
      <RecentlyAddedBooks />
    </div>
  )
}