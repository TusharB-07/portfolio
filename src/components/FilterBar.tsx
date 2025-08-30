import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FilterBarProps {
  selectedCategory: 'all' | 'blog' | 'project';
  onCategoryChange: (category: 'all' | 'blog' | 'project') => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availableTags: string[];
}

const FilterBar = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedTags, 
  onTagToggle, 
  availableTags 
}: FilterBarProps) => {
  return (
    <div className="space-y-6 p-6 bg-gradient-surface rounded-xl border border-border/50">
      {/* Category Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Category</h3>
        <div className="flex flex-wrap gap-2">
          {(['all', 'blog', 'project'] as const).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`capitalize transition-all duration-200 ${
                selectedCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-soft' 
                  : 'bg-background/50 hover:bg-primary/10 hover:border-primary/30'
              }`}
            >
              {category === 'all' ? 'All Posts' : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Tag Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? 'default' : 'outline'}
              className={`cursor-pointer transition-all duration-200 ${
                selectedTags.includes(tag)
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                  : 'bg-background/50 hover:bg-accent/10 hover:border-accent/30 hover:text-accent'
              }`}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => selectedTags.forEach(tag => onTagToggle(tag))}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all tags
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;