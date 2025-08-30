import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PostCard from '@/components/PostCard';
import FilterBar from '@/components/FilterBar';
import { posts, getFeaturedPosts, getPostsByCategory, getPostsByTag } from '@/data/posts';

interface HomeProps {
  searchQuery: string;
}

const Home = ({ searchQuery }: HomeProps) => {
  const location = useLocation();
  
  // Set initial category based on route
  const getInitialCategory = (): 'all' | 'blog' | 'project' => {
    if (location.pathname === '/blog') return 'blog';
    if (location.pathname === '/projects') return 'project';
    return 'all';
  };

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'blog' | 'project'>(getInitialCategory());
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const featuredPosts = getFeaturedPosts();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';
  const isProjectsPage = location.pathname === '/projects';

  // Update category when route changes
  useEffect(() => {
    setSelectedCategory(getInitialCategory());
  }, [location.pathname]);
  
  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on category, tags, and search
  const filteredPosts = useMemo(() => {
    let filtered = getPostsByCategory(selectedCategory);
    
    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, selectedTags, searchQuery]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Only show on homepage or when searching */}
      {!searchQuery && isHomePage && (
        <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="mx-auto max-w-4xl space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Building the Future
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  One Line at a Time
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Exploring modern web development, sharing insights, and showcasing 
                innovative projects that push the boundaries of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-glow"
                >
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/blog">
                    Read Blog
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Page-specific hero for blog/projects */}
      {!searchQuery && (isBlogPage || isProjectsPage) && (
        <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl space-y-6 animate-fade-up">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {isBlogPage ? 'Blog' : 'Projects'}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {isBlogPage 
                  ? 'Insights, tutorials, and thoughts on modern web development, design patterns, and emerging technologies.'
                  : 'A showcase of my latest work - from full-stack applications to innovative solutions that solve real-world problems.'
                }
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Features Section - Only show on homepage */}
      {!searchQuery && isHomePage && (
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What I Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate about creating exceptional digital experiences through code, design, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-xl bg-background/50 border border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Full-Stack Development</h3>
                <p className="text-muted-foreground">
                  Building scalable web applications with modern technologies like React, TypeScript, and Node.js.
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-xl bg-background/50 border border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-xl flex items-center justify-center">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Creating intuitive and beautiful user interfaces that provide exceptional user experiences.
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-xl bg-background/50 border border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, accessibility, and exceptional user experience across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts - Only show on homepage */}
      {!searchQuery && isHomePage && featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Posts
              </h2>
              <p className="text-lg text-muted-foreground">
                Highlighting the most impactful projects and insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Posts'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {searchQuery 
                ? `Found ${filteredPosts.length} posts matching your search`
                : 'Explore my latest thoughts on web development, projects, and technology'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <FilterBar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                availableTags={allTags}
              />
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    No posts found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedTags([]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;