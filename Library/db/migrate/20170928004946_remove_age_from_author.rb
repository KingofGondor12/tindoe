class RemoveAgeFromAuthor < ActiveRecord::Migration[5.1]
  def change
    remove_column :authors, :age, :string
  end
end
