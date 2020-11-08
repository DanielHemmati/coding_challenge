
array = ['dnaiel', 'hemmati', 'age']
res = array.map{|x| x.upcase}

# puts res


# this is the answer
def map list, &block
    return list.map(&block)
end


